import { FormikHelpers, useFormik } from 'formik';
import * as React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { useDispatch } from 'react-redux';
import Modal from '../../../components/Modal';
import { createTask } from '../actions';
import Form from '../Form';
import { ITaskForm } from '../types';
import Button from '../../../components/Button';

const CreateTask: React.FC<IProps> = (props) => {
  const { onClose } = props;
  const dispatch = useDispatch();
  const onSubmit = React.useCallback(
    (values: ITaskForm, formikHelpers: FormikHelpers<ITaskForm>) => {
      formikHelpers.setSubmitting(true);
      dispatch(
        createTask({
          formValues: values,
          onSuccess: onClose,
          onError: (e) => {
            formikHelpers.setErrors({
              title: e?.response?.data.error,
            });
            formikHelpers.setSubmitting(false);
          },
        }),
      );
    },
    [dispatch, onClose],
  );
  const formik = useFormik<ITaskForm>({
    initialValues: {
      title: '',
    },
    onSubmit,
  });
  return (
    <Modal
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      open
      disabled={formik.isSubmitting}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Form formik={formik} />
          <DialogActions>
            <Button disabled={formik.isSubmitting} type="submit">
              Создать
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Modal>
  );
};

interface IProps {
  onClose: () => void;
}

export default CreateTask;
