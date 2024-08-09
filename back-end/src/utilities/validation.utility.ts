import { fromZodError } from "zod-validation-error";
import ApiError from "./error.utility";
import { StatusCode, StatusMessages, ResponseMessages } from "../constants/status.constants"
import { TSignUp } from "../constants/types.constants";
import authValidations from "../validations/auth.validations";


class Validate {
    private validate<T>(params: T, parseFunction: (params: T) => any): void {
        try {
            parseFunction(params);
        } catch (error: any) {
            const validationError = fromZodError(error);
            throw new ApiError(
                StatusCode.VALIDATION_ERROR,
                StatusMessages.VALIDATION_ERROR,
                ResponseMessages.VALIDATION_ERROR,
                validationError
            );
        }
    }

    public signUp(params: TSignUp) {
        this.validate(params, authValidations.SignUp.parse.bind(authValidations.SignUp));
    }
}

export default new Validate();