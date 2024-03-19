import mongoose from "mongoose"

const Schema = mongoose.Schema

const puppySchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  breed: { type: String, default: 'Mixed' },
  ears: {
    type: String,
    default: 'Drop',
    enum: ['Button', 'Drop', 'Pointy']
  },
  color: {
    type: String,
    default: 'Golden',
    enum: ['Grey', 'Black', 'Golden', 'Brown', 'White']
  },
},
    { timestamps: true }
)

const Puppy = mongoose.model('Puppy', puppySchema)

export {
  Puppy
}