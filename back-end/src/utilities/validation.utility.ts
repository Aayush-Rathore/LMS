import ApiError from "./error.utility";
import { fromZodError } from "zod-validation-error";

class Validate {
    private validate<T>(params: T, parseFunction: (params: T) => any): void {
        try {
            parseFunction(params);
        } catch (error: any) {
            const validationError = fromZodError(error);
            // throw new ApiError(
            //     StatusCode.VALIDATION_ERROR,
            //     StatusMessages.VALIDATION_ERROR,
            //     ResponseMessages.VALIDATION_ERROR,
            //     validationError
            // );
            console.log(validationError)
        }
    }
}
