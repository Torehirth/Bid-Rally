/**
 * Extracts form values from an event target form and normalizes the "amount" field.
 *
 * Converts the submitted form into a plain object using FormData and ensures the
 * "amount" property is a Number.
 *
 * @param {Event} e - The event originating from the form (e.g. submit). The function
 *                    expects e.target to be the HTMLFormElement.
 * @returns {{ amount: number, [key: string]: string | number }} An object mapping form
 *                    field names to their values. The "amount" field is returned as a
 *                    number; other fields are strings as provided by FormData.
 *
 * @example
 * // In a submit handler:
 * // const data = getBiddingFormData(event);
 * // console.log(typeof data.amount); // "number"
 */
export const getBiddingFormData = (e) => {
  const form = e.target;
  const formData = Object.fromEntries(new FormData(form));

  formData.amount = Number(formData.amount);
  return formData;
};
