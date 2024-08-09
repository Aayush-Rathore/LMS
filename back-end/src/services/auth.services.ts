import { TSignUp } from "../constants/types.constants";
import studentDB from "../database/functions/students.db"
import ApiError from "../utilities/error.utility";
import { StatusCode, StatusMessages, ResponseMessages } from "../constants/status.constants"

class AuthServices {
    public async signUp(params: TSignUp) {
        const studentDetails = await studentDB.findStudent({ number: params.number, email: params.email });
        if (studentDetails) throw new ApiError(StatusCode.CONFLICT, StatusMessages.CONFLICT, ResponseMessages.SERVICE_UNAVAILABLE, {
            message: `User already exits with the provided credentials. Please try again with diffrent credentials.`
        });
        return studentDetails;
    }
}

export default new AuthServices();