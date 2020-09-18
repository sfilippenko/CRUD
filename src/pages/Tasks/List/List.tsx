import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import IAppState from '../../../types/state';
import { deleteTask } from '../actions';
import styles from './styles';
import { ITask } from '../types';
import NoData from '../../../components/NoData';
import DeleteIcon from '../../../svg/DeleteIcon';

const List: React.FC<IProps> = (props) => {
  const { items, classes, deleteTask, loadingIds } = props;
  if (!items?.length) {
    return <NoData />;
  }
  return (
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
            return (
              <TableRow key={id}>
                <TableCell>{`Задача №${id}`}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>
                  <IconButton
                    disabled={loadingIds.includes(id)}
                    onClick={() => deleteTask(id)}
                  >
                    <DeleteIcon className={classes.deleteIcon} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

interface IProps extends WithStyles<typeof styles> {
  items: ITask[] | null;
  loadingIds: number[];
  deleteTask: typeof deleteTask;
}

export default connect(
  (state: IAppState) => ({
    items: state.tasks.items,
    loadingIds: state.tasks.loadingIds,
  }),
  { deleteTask },
)(withStyles(styles)(List));
