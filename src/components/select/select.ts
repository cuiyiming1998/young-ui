import { ExtractPropTypes } from "vue"

export const selectProps = {
  placeholder: {
    type: String,
    default: ''
  }
} as const

export type SelectProps = ExtractPropTypes<typeof selectProps>