import { Form } from "react-bootstrap";
import { Field, getIn, useFormikContext } from "formik";
import styles from "./input.module.scss";

type InputForm = {
    name: string
    type: string,
    value?: any,
    onChange: (arg: any) => void,
    onFocus?: () => void,
    onBlur?: () => void,
    onClick?: () => void,

    isFloating?: boolean,
    label?: string,
    placeholder?: string,
    labelAndPlaceholder?: string,

    disabled?: boolean,
    validate?: () => void,

    required?: string
}

const Input = ({
                   name,
                   type,
                   value,
                   onChange,
                   onFocus,
                   onBlur,
                   onClick,

                   isFloating,
                   label,
                   placeholder,
                   labelAndPlaceholder,

                   disabled,
                   validate,

                   required
               }: InputForm) => {
    const { setFieldTouched } = useFormikContext();
    const { setFieldValue } = useFormikContext();

    if (isFloating) {
        return (
            <Form.Group className="position-relative">
                <Form.Floating className={styles.floatingInput}>
                    <Field name={name} validate={validate}>
                        {({ field, form }: any) => {
                            return (
                                <>
                                    <Form.Control
                                        {...field}
                                        type={type}
                                        className={
                                            getIn(form.touched, name) && getIn(form.errors, name)
                                                ? `${styles.input} ${styles.input_invalid} is-invalid`
                                                : styles.input
                                        }
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onClick={onClick}
                                        value={value || ""}
                                        placeholder={label}
                                        disabled={disabled}
                                        onChange={(e) => {
                                            onChange(e);
                                            setFieldTouched(name);
                                            setFieldValue(name, e.target.value || null);
                                        }}
                                    />
                                    <label
                                        className={
                                            (required ? " " + styles.label_required : "") +
                                            (required &&
                                            getIn(form.touched, name) &&
                                            getIn(form.errors, name)
                                                ? " " + styles.label_required_invalid
                                                : "") +
                                            (!value || value?.length === 0
                                                ? " " + styles.label
                                                : " " + styles.labelWIthData)
                                        }
                                    >
                                        {label}
                                    </label>
                                </>
                            );
                        }}
                    </Field>
                    <div className={styles.feedback + " " + "invalid-feedback"}>
                        <Field name={name}>
                            {({ form }: any) => {
                                const error = getIn(form.errors, name);
                                const touch = getIn(form.touched, name);
                                return error && touch ? error : null;
                            }}
                        </Field>
                    </div>
                </Form.Floating>
            </Form.Group>
        );
    }

    if (labelAndPlaceholder) {
        return (
            <Form.Group className="position-relative">
                <div className={styles.labelPlaceholderInput}>
                    <Field name={name} validate={validate}>
                        {({ field, form }: any) => {
                            return (
                                <>
                                    <Form.Control
                                        {...field}
                                        type={type}
                                        className={
                                            getIn(form.touched, name) && getIn(form.errors, name)
                                                ? `${styles.input} ${styles.input_invalid} is-invalid`
                                                : styles.input
                                        }
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onClick={onClick}
                                        value={value || ""}
                                        placeholder={placeholder}
                                        disabled={disabled}
                                        onChange={(e) => {
                                            onChange(e);
                                            setFieldTouched(name);
                                            setFieldValue(name, e.target.value || null);
                                        }}
                                    />
                                    <label className={styles.constLabel}>{label}</label>
                                </>
                            );
                        }}
                    </Field>
                    <div className={styles.feedback + " " + "invalid-feedback"}>
                        <Field name={name}>
                            {({ form }: any) => {
                                const error = getIn(form.errors, name);
                                const touch = getIn(form.touched, name);
                                return error && touch ? error : null;
                            }}
                        </Field>
                    </div>
                </div>
            </Form.Group>
        );
    }
};

export default Input;
