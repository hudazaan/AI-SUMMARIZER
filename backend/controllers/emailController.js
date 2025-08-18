import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  try {
    const { recipients, summary } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipients,
      subject: "Meeting Summary",
      text: summary,
    });

    res.json({ message: "✅ Email sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
