import { NotFoundError } from "@/errors/notFoundError";
import { createClient } from "@/lib/supabase/server";
import { productSchema } from "@/models/productSchema";
import { ProductService } from "@/services/productService";
import { UUID } from "crypto";

// Mock dependencies
jest.mock("@/utils/supabase/server", () => ({
  createClient: jest.fn(),
}));

jest.mock("@/models/productSchema", () => ({
  productSchema: {
    safeParse: jest.fn(),
  },
}));

describe("ProductService", () => {
  let productService: ProductService;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockSupabaseClient: any;
  let mockSelect: jest.Mock;
  let mockFrom: jest.Mock;
  let mockEq: jest.Mock;
  let mockSingle: jest.Mock;

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();

    // Setup Supabase client mock chain
    mockSingle = jest.fn();
    mockEq = jest.fn().mockReturnValue({ single: mockSingle });
    mockSelect = jest.fn().mockReturnValue({ eq: mockEq });
    mockFrom = jest.fn().mockReturnValue({ select: mockSelect });

    mockSupabaseClient = {
      from: mockFrom,
    };

    (createClient as jest.Mock).mockResolvedValue(mockSupabaseClient);

    productService = new ProductService();
  });

  describe("getProductById", () => {
    const mockId = "123e4567-e89b-12d3-a456-426614174000" as unknown as UUID;
    const mockProduct = { id: mockId, name: "Test Product", price: 100 };

    it("should return a product when found and valid", async () => {
      // Arrange
      mockSingle.mockResolvedValue({ data: mockProduct, error: null });
      (productSchema.safeParse as jest.Mock).mockReturnValue({
        success: true,
        data: mockProduct,
      });

      // Act
      const result = await productService.getProductById(mockId);

      // Assert
      expect(createClient).toHaveBeenCalled();
      expect(mockFrom).toHaveBeenCalledWith("products");
      expect(mockSelect).toHaveBeenCalledWith("*");
      expect(mockEq).toHaveBeenCalledWith("id", mockId);
      expect(mockSingle).toHaveBeenCalled();
      expect(productSchema.safeParse).toHaveBeenCalledWith(mockProduct);
      expect(result).toEqual(mockProduct);
    });

    it("should throw NotFoundError when product is not found", async () => {
      // Arrange
      mockSingle.mockResolvedValue({ data: null, error: null });

      // Act & Assert
      await expect(productService.getProductById(mockId)).rejects.toThrow(
        NotFoundError
      );
      expect(createClient).toHaveBeenCalled();
      expect(mockFrom).toHaveBeenCalledWith("products");
    });

    it("should throw Error when database error occurs", async () => {
      // Arrange
      const dbError = { message: "Database connection failed" };
      mockSingle.mockResolvedValue({ data: null, error: dbError });

      // Act & Assert
      await expect(productService.getProductById(mockId)).rejects.toThrow(
        `Database error: ${dbError.message}`
      );
    });

    it("should throw Error when product data is invalid", async () => {
      // Arrange
      mockSingle.mockResolvedValue({ data: mockProduct, error: null });
      (productSchema.safeParse as jest.Mock).mockReturnValue({
        success: false,
        error: new Error("Validation failed"),
      });

      // Act & Assert
      await expect(productService.getProductById(mockId)).rejects.toThrow(
        "Invalid product data received from Supabase"
      );
    });
  });

  describe("getProducts", () => {
    const mockProducts = [
      { id: "1", name: "Product 1", price: 100 },
      { id: "2", name: "Product 2", price: 200 },
    ];

    it("should return all valid products", async () => {
      // Arrange
      mockSelect.mockResolvedValue({ data: mockProducts, error: null });

      // Mock safeParse to return success for all products
      (productSchema.safeParse as jest.Mock).mockImplementation((product) => ({
        success: true,
        data: product,
      }));

      // Act
      const result = await productService.getProducts();

      // Assert
      expect(createClient).toHaveBeenCalled();
      expect(mockFrom).toHaveBeenCalledWith("products");
      expect(mockSelect).toHaveBeenCalledWith("*");
      expect(result).toHaveLength(2);
      expect(result).toEqual(mockProducts);
      expect(productSchema.safeParse).toHaveBeenCalledTimes(2);
    });

    it("should filter out invalid products", async () => {
      // Arrange
      mockSelect.mockResolvedValue({ data: mockProducts, error: null });

      // Mock safeParse to return success only for the first product
      (productSchema.safeParse as jest.Mock).mockImplementation((product) => {
        if (product.id === "1") {
          return { success: true, data: product };
        }
        return {
          success: false,
          error: new Error("Validation failed"),
        };
      });

      // Act
      const result = await productService.getProducts();

      // Assert
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual(mockProducts[0]);
      expect(productSchema.safeParse).toHaveBeenCalledTimes(2);
    });

    it("should return empty array when no products found", async () => {
      // Arrange
      mockSelect.mockResolvedValue({ data: null, error: null });

      // Act
      const result = await productService.getProducts();

      // Assert
      expect(result).toEqual([]);
    });

    it("should throw Error when database error occurs", async () => {
      // Arrange
      const dbError = { message: "Database connection failed" };
      mockSelect.mockResolvedValue({ data: null, error: dbError });

      // Act & Assert
      await expect(productService.getProducts()).rejects.toThrow(
        `Database error: ${dbError.message}`
      );
    });

    it("should return empty array when all products are invalid", async () => {
      // Arrange
      mockSelect.mockResolvedValue({ data: mockProducts, error: null });

      // Mock safeParse to return failure for all products
      (productSchema.safeParse as jest.Mock).mockReturnValue({
        success: false,
        error: new Error("Validation failed"),
      });

      // Act
      const result = await productService.getProducts();

      // Assert
      expect(result).toEqual([]);
      expect(productSchema.safeParse).toHaveBeenCalledTimes(2);
    });
  });
});
