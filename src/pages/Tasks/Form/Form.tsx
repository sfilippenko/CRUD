import * as React from 'react';
import Input from '../../../components/Input';
import FormElement from '../../../components/FormElement';

const Form: React.FC<IProps> = (props) => {
  const { formik } = props;
  return (
    <>
      <FormElement
        title="Краткое описание"
        Component={Input}
        disabled={formik.isSubmitting}
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
    </>
  );
};

interface IProps {
  formik: any;
}

export default Form;
