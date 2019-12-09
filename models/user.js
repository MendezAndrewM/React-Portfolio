const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    bcrypt = require(bcrypt),
    SALT_WORK_FACTOR = 12;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^(?=.{6,18}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    },
    name: {
        first: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 16
        },
        last: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 16
        }
    },
    organization: {
        type: String,
        trim: true,
        maxlength: 42,
        contact: {
            phoneNumber: {
                type: String,
                trim: true
            },
            address: {
                line1: {
                    type: String,
                    trim: true
                },
                line2: {
                    type: String,
                    trim: true
                },
                line3: {
                    type: String,
                    trim: true
                },
                city: {
                    type: String,
                    trim: true
                },
                state: {
                    type: String,
                    trim: true
                },
                zipCode: {
                    type: Number,
                    trim: true,
                    length: 5
                },
            }
        }
    },
    email: {
        type: String,
        trim: true,
        match: /^(.*)@(.*)\.(.*)+(?<![_.])$/
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    paymentMethods: [{
        cardType: String,
        name: {
            type: String,
            trim: true
        },
        cardNumber: {
            type: String,
            length: 20
        },
        expiration: String,
        CCV: String
    }]
});

schema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });