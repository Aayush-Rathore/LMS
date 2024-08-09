import BaseValidations from "./base.validations";
import { z } from "zod";

class AuthValidations extends BaseValidations {
    public SignUp = z.object({
        fullName: this.fullName,
        gender: this.gender,
        number: this.number,
        email: this.email,
        password: this.password,
    }).strict();
}

export default new AuthValidations();