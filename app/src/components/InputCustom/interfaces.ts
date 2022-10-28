
export interface Props {
  value: string | number | undefined
  setValue?: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<string>>
  label?: string
  type?: string
  placeholder?: string
}