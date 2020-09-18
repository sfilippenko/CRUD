import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import IAppState from '../../../types/state';
import { deleteTask } from '../actions';
import styles from './styles';
import { ITask } from '../types';
import NoData from '../../../components/NoData';
import DeleteIcon from '../../../svg/DeleteIcon';
import EditIcon from '../../../svg/EditIcon';
import LoadingWrapper from '../../../components/LoadingWrapper';

const List: React.FC<IProps> = (props) => {
  const { items, classes, deleteTask, loadingIds, loading } = props;
  return (
    <LoadingWrapper loading={loading}>
      {items?.length ? (
        <div className={classes.wrapper}>
          <Table>
            <colgroup>
              <col width="20%" />
              <col width="60%" />
              <col width="1%" />
            </colgroup>
            <TableBody>
              {items.map((item) => {
                const { id, title } = item;
                const disabled = loading || loadingIds.includes(id);
                return (
                  <TableRow key={id}>
                    <TableCell>{`Задача №${id}`}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>
                      <div className={classes.actionsWrapper}>
                        <IconButton
                          component={Link}
                          to={`/tasks/${id}`}
                          disabled={disabled}
                        >
                          <EditIcon className={classes.editIcon} />
                        </IconButton>
                        <IconButton
                          disabled={disabled}
                          onClick={() => deleteTask(id)}
                        >
                          <DeleteIcon className={classes.deleteIcon} />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      ) : (
        <NoData />
      )}
    </LoadingWrapper>
  );
};

interface IProps extends WithStyles<typeof styles> {
  items: ITask[] | null;
  loadingIds: number[];
  deleteTask: typeof deleteTask;
  loading: boolean;
}

export default connect(
  (state: IAppState) => ({
    items: state.tasks.items,
    loadingIds: state.tasks.loadingIds,
    loading: state.tasks.loading,
  }),
  { deleteTask },
)(withStyles(styles)(List));
