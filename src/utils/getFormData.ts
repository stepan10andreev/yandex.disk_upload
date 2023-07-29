export const getFormData = <T>(form: HTMLFormElement): T => {
    const formData = new FormData(form) as unknown as Iterable<[T, FormDataEntryValue]>;
    const formJson: T = Object.fromEntries(formData);
    return formJson
}
