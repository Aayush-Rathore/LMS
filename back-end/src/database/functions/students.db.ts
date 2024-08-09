import { Students } from "../models/student.model";

class StudentsDB {
    public async findStudent({ number, email }: { number?: string, email?: string }) {
        const studentDetails = await Students.findOne({
            $or: [{ number }, { email }],
        }).select("+password");
        return studentDetails;
    }
}

export default new StudentsDB();