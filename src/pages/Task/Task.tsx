import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import NoData from '../../components/NoData';
import IAppState from '../../types/state';
import { editTask, getTasks } from '../Tasks/actions';
import { ITask, ITaskForm } from '../Tasks/types';
import Loader from '../../components/Loader';
import LoadingWrapper from '../../components/LoadingWrapper';
import Form from '../Tasks/Form';
import Button from '../../components/Button';
import styles from './styles';

const Task: React.FC<IProps> = (props) => {
  const { loading, loaded, item, getTasks, editTask, history, classes } = props;

  React.useEffect(() => {
    if (!loaded) {
      getTasks();
    }
  }, [getTasks, loaded]);

  const onSubmit = React.useCallback(
    (values: ITaskForm, formikHelpers: FormikHelpers<ITaskForm>) => {
      formikHelpers.setSubmitting(true);
      editTask({
        formValues: values,
        id: item?.id || 0,
        onSuccess: () => history.push('/tasks'),
        onError: (e) => {
          formikHelpers.setErrors({
            title: e?.response?.data.error,
          });
          formikHelpers.setSubmitting(false);
        },
      });
    },
    [editTask, history, item],
  );

  const formik = useFormik<ITaskForm>({
    initialValues: {
      title: item?.title || '',
    },
    onSubmit,
    enableReinitialize: true,
  });

  if (!loaded) {
    return <Loader center />;
  }

  return (
    <LoadingWrapper loading={loading}>
      {item ? (
        <>
          <Typography classes={{ root: classes.title }} variant="h1">
            Задача №{item.id}
          </Typography>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <Form formik={formik} />
            {formik.dirty ? (
              <Button
                disabled={formik.isSubmitting}
                className={classes.button}
                type="submit"
              >
                Сохранить
              </Button>
            ) : (
              <Button
                disabled={formik.isSubmitting}
                className={classes.button}
                variant="secondary"
                to="/tasks"
              >
                Вернуться в список
              </Button>
            )}
          </form>
        </>
      ) : (
        <NoData />
      )}
    </LoadingWrapper>
  );
};

type IPassedProps = RouteComponentProps<{ id: string }>;

interface IProps extends IPassedProps, WithStyles<typeof styles> {
  item?: ITask | null;
  loading: boolean;
  loaded: boolean;
  getTasks: typeof getTasks;
  editTask: typeof editTask;
}

export default connect(
  (state: IAppState, props: IPassedProps) => ({
    item: state.tasks.items?.find(
      (item) => item.id === Number(props.match.params.id),
    ),
    loaded: state.tasks.loaded,
    loading: state.tasks.loading,
  }),
  {
    getTasks,
    editTask,
  },
)(withStyles(styles)(Task));
