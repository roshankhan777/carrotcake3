import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { Grid } from "@mui/material";
import axios from "axios";
import SignInModelBox from "./SignInModelBox";
import Button from 'react-bootstrap/Button';

const bgImage =
  "";
function Illustration() {

  const navigate = useNavigate();
  //const cors = require("cors");
  //const express = require("express");
  //const app = express();
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [ApiData, setApiData] = useState([]);
  let eid = "";

  //console.log("ApiData-------------------------",ApiData)
  // useEffect(()=>{
  //   fetch("http://localhost:3001/api/plans",{
  //     method:"GET",
  //     headers:{
  //       "Content-type":"application/json",
  //     },
  //   }).then((result)=>{
  //     result.json.then((resp)=>{
  //       console.warn(resp);
  //       setApiData(resp);
  //     })
  //   })

  // }, []);
  // console.log(ApiData);

  useEffect(() => {
    axios.get("http://localhost:3001/api/plans").then((response) => {
      //console.log(response);
      setApiData(response.data.prices);
    })
      .catch(err => {
        alert("Something went wrong.");
      })
  }, []);

  //app.use(cors(ApiData))
  //console.log("ApiData-------------------------", ApiData.prices);
  //console.log(ApiData.prices)

  const SignInModelBox = (id) => {
    return `<SignInModelBox />,${id}`;
  }
  const hello = (eid) => {
    //alert("Price Id.........."+eid);
    return <SignInModelBox />
  }

  const hellotest = (eid) => {
    navigate(`/signinform/${eid}`);
  }
  return (
    <IllustrationLayout
      title=""
      description=""
      illustration={{
        title: '',
        description:
          "",
      }}
    >
      <Grid>
        <div id="generic_price_table">
          <section>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="price-heading clearfix">
                    <h1>Carrot Cake Subscribing Plan</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                {
                  ApiData.length > 0 &&
                  ApiData.map((element, index) => {
                    //console.log("element-----------------------------------",element);
                   
                    return (
                      <div class="col-md-4" key={index}>
                        <div class="generic_content clearfix">
                          <div class="generic_head_price clearfix">
                            <div class="generic_head_content clearfix">
                              <div class="head_bg"></div>
                              <div class="head">
                                <span>{element.name}</span>
                              </div>
                            </div>
                            <div class="generic_price_tag clearfix">
                              <span class="price">
                                <span class="sign">$</span>
                                <span class="currency">{element.unit_amount}</span>
                                <span class="cent">.00</span>
                                <span class="month">/{element.interval}</span>
                              </span>
                            </div>
                          </div>
                          <div class="generic_feature_list">
                            <ul>
                              <li><span>0 To {element.max_clients} </span> client accounts</li>
                              <li><span>{element.description}</span></li>
                              <li><span>14 Days Free Trial</span></li>
                            </ul>
                          </div>
                          <div class="generic_price_btn clearfix">
                            <Link class="" as={Link} to={`/signinform/${element.plan_id}`}>Select with Free Trial</Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </div>
      </Grid>
      {/* <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput type="email" placeholder="Email" size="large" />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput type="password" placeholder="Password" size="large" />
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth>
            Sign In
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox> */}
    </IllustrationLayout>


  );
}

export default Illustration;