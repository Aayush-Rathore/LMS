import { z } from 'zod';

class BaseValidations {
    protected fullName = z.string().min(7).max(30);

    protected dob = z.date();

    protected address = z.string().min(10).max(50);

    protected gender = z.enum(["male", "female", "other"]);

    protected email = z.string().email({ message: "Invalid email address" });

    protected number = z.string().regex(/^[6-9]\d{9}$/, {
        message: "Invalid phone number. Must be a 10-digit number starting with 6, 7, 8, or 9.",
    })

    protected password = z.string().min(6).max(20)
}

export default BaseValidations;