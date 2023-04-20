
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import typography from "assets/theme/base/typography";
import Slider from "layouts/dashboard/components/Slider";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import Table from "examples/Tables/Table";
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Form from 'react-bootstrap/Form';
import { useRef, useEffect, } from "react";
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Editor from 'react-simple-wysiwyg';

function Default() {
  const [value, onChange] = useState(new Date());
  const [html, setHtml] = useState('my <b>HTML</b>');

  const { columns, rows } = authorsTableData;
  const { size } = typography;
  // function onChange(e) {
  //   setHtml(e.target.value);
  // }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3} md={12}>
          <Grid item xs={12} lg={6}>
            <Slider />
          </Grid>
          <Grid item xs={12} lg={1}>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Calendar xs={12} onChange={onChange} value={value} />
          </Grid>
        </Grid>
        <ArgonTypography mb={2} variant="h3" fontWeight="bold">
          Performance
        </ArgonTypography>
        <Grid container spacing={3} mb={3} md={12}>
          <Grid item xs={12} lg={12}>
            <Editor value={html} onChange={onChange} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <GradientLineChart
              title="POST ENGAGEMENT"
              // description={
              //   <ArgonBox display="flex" alignItems="center">
              //     <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
              //       <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
              //     </ArgonBox>
              //     <ArgonTypography variant="button" color="text" fontWeight="medium">
              //       4% more{" "}
              //       <ArgonTypography variant="button" color="text" fontWeight="regular">
              //         in 2022
              //       </ArgonTypography>
              //     </ArgonTypography>
              //   </ArgonBox>
              // }
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <GradientLineChart
              title="IMPRESSIONS"
              // description={
              //   <ArgonBox display="flex" alignItems="center">
              //     <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
              //       <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
              //     </ArgonBox>
              //     <ArgonTypography variant="button" color="text" fontWeight="medium">
              //       4% more{" "}
              //       <ArgonTypography variant="button" color="text" fontWeight="regular">
              //         in 2022
              //       </ArgonTypography>
              //     </ArgonTypography>
              //   </ArgonBox>
              // }
              chart={gradientLineChartData}
            />
          </Grid>
        </Grid>
        <Grid container mb={3} md={12}>
          <Grid container spacing={3} md={4}>
            <Grid item xs={12} md={6} lg={6}>
              <DetailedStatisticsCard
                title="Amount Spent"
                count="$5,133.15"
                icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
                percentage={{ color: "success", count: "+55%", text: "Comparison period : $3,889.90" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <DetailedStatisticsCard
                title="CRM"
                count="$3.84"
                icon={{ color: "error", component: <i className="ni ni-world" /> }}
                percentage={{ color: "success", count: "+3%", text: "Comparison period : $8.59" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <DetailedStatisticsCard
                title="Link CTR"
                count="1.01%"
                icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
                percentage={{ color: "error", count: "-2%", text: "Comparison period : 2.64%" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <DetailedStatisticsCard
                title="Link Clicks"
                count="1.1%"
                icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
                percentage={{ color: "success", count: "+5%", text: "Comparison period : 2.67%" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <DetailedStatisticsCard
                title="Frequency"
                count="1.7"
                icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
                percentage={{ color: "success", count: "+55%", text: "Comparison period : 1.8" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <DetailedStatisticsCard
                title="CPC (Link)"
                icon={{ color: "error", component: <i className="ni ni-world" /> }}
                count="$0.24"
                percentage={{ count: "+3%", color: "success", text: "Comparison period : $0.20" }}
              />
            </Grid>
          </Grid>
          <Grid container mb={3} md={8}>
            <Grid item ml={3} mb={3} md={12}>
              <SalesTable title="Campaigns Overview" rows={salesTableData} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item md={12}>
            <ArgonTypography mt={2} variant="h3" fontWeight="bold">
              Progress Bar
            </ArgonTypography>
            <div className='row'>
              <div className='progressbar-section'>
              </div>

              <div className="row">
                <div className="col-8">

                </div>
                <div className="col-2">
                  <Form.Select aria-label="Default select example">
                    <option>Google</option>
                    <option value="1">Facebook</option>
                    <option value="2">Instagram</option>
                    <option value="3">Microsoft</option>
                  </Form.Select>


                </div>
                <div className="col-2">
                  <Form.Select aria-label="Default select example">
                    <option>Date Range</option>
                    <option value="1">Yahoo</option>
                    <option value="2">Bing</option>
                    <option value="3">Opera</option>
                  </Form.Select>
                </div>
              </div> <br />
              <Accordion defaultActiveKey="0" flush>
                <br />
                <Accordion.Item eventKey="1">
                  <Accordion.Header>New Ad Launch</Accordion.Header>
                  <Accordion.Body>
                    <ProgressBar className='dashboard-progress'>
                      <ProgressBar now={20} key={1} label="text" className='progress-step-1' />
                      <ProgressBar now={20} key={2} label="Delayed" className='progress-step-2' />
                      <ProgressBar now={20} key={3} label="Business development" className='progress-step-3' />
                      <ProgressBar now={20} key={4} label="Propoosal" className='progress-step-4' />
                      <ProgressBar now={20} key={5} label="Closed" className='progress-step-5' />
                    </ProgressBar>
                  </Accordion.Body>
                </Accordion.Item> <br />
                <Accordion.Item eventKey="2">
                  <Accordion.Header>New Ad Launch</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item md={12}>
            <ArgonTypography mt={2} variant="h3" fontWeight="bold">
              Change History
            </ArgonTypography> <br />
            <Table columns={columns} rows={rows} />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;