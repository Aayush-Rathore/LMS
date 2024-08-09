import { z } from "zod";
import authValidations from "../validations/auth.validations";

export type TSignUp = z.infer<typeof authValidations.SignUp>;