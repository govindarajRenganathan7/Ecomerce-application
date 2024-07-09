const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      userSchema = mongoose.Schema({
        firstname: {
            type: String,
            required: true
        },

        lastname: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        mobile: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true,
            unique: true
        },

        role: {
          type: String,
          default: "user"
        }

      })

      userSchema.pre("save", async function () {
        this.password = await bcrypt.hash(this.password, 10);
      })

      userSchema.methods.isPasswordMatched = async (enteredPassword) => {
        return await bcrypt.compare(enteredPassword,this.password);
      }

module.exports = mongoose.model('Users', userSchema);