import { auth } from "@clerk/nextjs";

export const createAuthOnlyHandler = <
  InputType,
  ReturnType extends {
    error?: string | null | undefined;
  }
>(
  handler: (data: InputType) => Promise<ReturnType>
) => {
  return async (data: InputType): Promise<ReturnType> => {
    const { userId } = auth();

    if (!userId) {
      return {
        error: "Unauthorized",
      } as ReturnType;
    }

    return handler(data);
  };
};
