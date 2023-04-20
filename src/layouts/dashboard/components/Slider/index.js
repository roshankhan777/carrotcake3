import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArgonTypography from "components/ArgonTypography";
import { Grid } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Notifications" {...a11yProps(0)} />
          <Tab label="To-Do's" {...a11yProps(1)} />
          <Tab label="Inbox" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <img src="https://i.ibb.co/sJsWtmy/Group-2936.png" w="100" border="0" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid>
          <div className='noti-card'>
            <div className='row'>
              <div className='col-1'>
                <img className='noti-icn' src="https://i.ibb.co/m8HX6Q2/icon-branded-frame-32.png" alt="icon-branded-frame-32" border="0" />
              </div>
              <div className='col-8'>
                <h6 className='noti-title'>Check budget amount</h6>
                <p className='noti-txt'>Verify the clients budget and add it to the client diary section.</p>
              </div>
              <div className='col-3'>
                <h6 className='noti-remark'>Unread</h6>
                <p className='noti-time'>24.04.2022 | 13:44</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid mt={1}>
          <div className='noti-card-tt'>
            <div className='row'>
              <div className='col-1'>
                <img className='noti-icn' src="https://i.ibb.co/m8HX6Q2/icon-branded-frame-32.png" alt="icon-branded-frame-32" border="0" />
              </div>
              <div className='col-8'>
                <h6 className='noti-title'>Meta ads approved</h6>
                <p className='noti-txt'>Verify the clients budget and add it to the client diary section.</p>
              </div>
              <div className='col-3'>
                <p className='noti-time'>24.04.2022 | 13:44</p>
              </div>
            </div>
          </div>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}