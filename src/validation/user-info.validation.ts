import Joi from "joi";

export const userInfoValidationSchema = Joi.object({
  username: Joi.string().min(3).max(15).required(),
  password: Joi.string()
    .pattern(/^(?=.*[A-Z]){1,}(?=.*[!@#$%^&*()-__+.])(?=.*[0-9].*[0-9]){1,}(?=.*[a-z]){1,}.{8,16}$/)
    .min(8)
    .max(16)
    .required()
    .messages({
      "string.pattern.base":
        "1 upper case, 1 lower case, 1 special character, 1 digit",
    }),
  email: Joi.string().email().required(),
});

export const userInfoUpdateValidationSchema = Joi.object({
  username: Joi.string().min(3).max(15).optional(),
  password: Joi.string()
    .pattern(/^(?=.*[A-Z]){1,}(?=.*[!@#$%^&*()-__+.])(?=.*[0-9].*[0-9]){1,}(?=.*[a-z]){1,}.{8,16}$/)
    .min(8)
    .max(16)
    .optional()
    .messages({
      "string.pattern.base":
        "1 upper case, 1 lower case, 1 special character, 1 digit",
    }),
  email: Joi.string().email().optional(),
  id: Joi.string().required(),
});

export const userInfoByIdValidationSchema = Joi.object({
    id: Joi.string().required(),
});



