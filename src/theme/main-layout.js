import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { drawerWidth } from '../ccm-constant';
import { closeDrawer, openDrawer } from '../store/slices/drawerSlices';

const useBoxStyles = () => {
  const theme = useTheme();
  const { drawer } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;

      if (newScreenWidth < 768 && drawer.open) {
        dispatch(closeDrawer());
      } else if (newScreenWidth >= 768 && !drawer.open) {
        dispatch(openDrawer());
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, drawer.open]);

  const styles = {
    box: {
      transition: 'margin-left 0.3s ease',
      marginLeft: '0px',
      marginTop: '65px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawer.open ? `${drawerWidth}` : '0px',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0px',
      },
    },
  };

  return styles;
};

export default useBoxStyles;
