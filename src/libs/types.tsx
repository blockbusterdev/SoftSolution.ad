/**
 * Some structure types defined by Jiners
 * @author Jiners Enoheart
 * @published July 25, 2024
 * @modified July 25, 2024
 */

export const ERROR = 'err'
export const WARNING = 'warn'
export const SUCCESS = 'success'

/** Submit status type - HTTP status*/
export interface Status {
  type: string,
  description: string
}