import { signInWithEmail } from "@/services/authService";

const mockAuth = {
  signInWithPassword: jest.fn(),
};

const mockSupabase = {
  auth: mockAuth,
} as any;

describe("signInWithEmail", () => {
  it("appelle supabase.auth.signInWithPassword avec les bons arguments", async () => {
    mockAuth.signInWithPassword.mockResolvedValue({
      data: { user: { email: "test@example.com" } },
      error: null,
    });

    const res = await signInWithEmail(
      mockSupabase,
      "test@example.com",
      "pass123"
    );

    expect(mockAuth.signInWithPassword).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "pass123",
    });
    expect(res.error).toBeNull();
    expect(res.data.user.email).toBe("test@example.com");
  });
});
