import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Fixed 'require' to 'required'
    gmail: { type: String, required: true, unique: true }, // Added 'unique' constraint
    password: { type: String, required: true }
});

// 🔹 Hash password before saving to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Only hash if password is modified

    this.password = await bcrypt.hash(this.password, 12);
    next();
});

export const User = mongoose.model("User", userSchema);
