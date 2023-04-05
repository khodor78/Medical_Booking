import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DoctorForm from "../components/DoctorForm";
import moment from "moment";

function BookAppointment() {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  const getDoctorData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/doctor/get-doctor-info-by-id",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        setDoctor(response.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };
  // const checkAvailability = async () => {
  //   try {
  //     dispatch(showLoading());
  //     const response = await axios.post(
  //       "/api/user/check-booking-avilability",
  //       {
  //         doctorId: params.doctorId,
  //         date: date,
  //         time: time,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     dispatch(hideLoading());
  //     if (response.data.success) {
  //       toast.success(response.data.message);
  //       setIsAvailable(true);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     toast.error("Error booking appointment");
  //     dispatch(hideLoading());
  //   }
  // };
  
  // const checkAvailability = async () => {
  //   try {
  //     dispatch(showLoading());
  
  //     // Check if selected date is within range
  //     const selectedDate = moment(date, "DD-MM-YYYY");
  //     const availableDateFrom = moment(doctor.availableFrom, "DD-MM-YYYY");
  //     const availableDateTo = moment(doctor.availableTo, "DD-MM-YYYY");
  
  //     if (selectedDate.isBefore(availableDateFrom) || selectedDate.isAfter(availableDateTo)) {
  //       toast.error("Selected date is not within available date range");
  //       return;
  //     }
  
  //     // Check if selected time is within range
  //     const selectedTime = moment(time, "HH:mm");
  //     const availableTimeFrom = moment(doctor.timings[0], "HH:mm");
  //     const availableTimeTo = moment(doctor.timings[1], "HH:mm");
  
  //     if (selectedTime.isBefore(availableTimeFrom) || selectedTime.isAfter(availableTimeTo)) {
  //       toast.error("Selected time is not within available time range");
  //       return;
  //     }
  
  //     // Check if booking slot is available
  //     const response = await axios.post(
  //       "/api/user/check-booking-avilability",
  //       {
  //         doctorId: params.doctorId,
  //         date: date,
  //         time: time,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  
  //     dispatch(hideLoading());
  
  //     if (response.data.success) {
  //       toast.success(response.data.message);
  //       setIsAvailable(true);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     toast.error("Error checking booking availability");
  //     dispatch(hideLoading());
  //   }
  // };
  // const checkAvailability = async () => {
  //   try {
  //     dispatch(showLoading());
  
  //     // Check if selected date is within range
  //     const selectedDate = moment(date, "DD-MM-YYYY");
  //     const availableDateFrom = moment(doctor.availableFrom, "DD-MM-YYYY");
  //     const availableDateTo = moment(doctor.availableTo, "DD-MM-YYYY");
  
  //     if (selectedDate.isBefore(availableDateFrom) || selectedDate.isAfter(availableDateTo)) {
  //       toast.error("Selected date is not within available date range");
  //       // setIsAvailable(false); // set isAvailable to false
  //       return;
  //     }
  
  //     // Check if selected time is within range
  //     const selectedTime = moment(time, "HH:mm");
  //     const availableTimeFrom = moment(doctor.timings[0], "HH:mm");
  //     const availableTimeTo = moment(doctor.timings[1], "HH:mm");
  
  //     if (selectedTime.isBefore(availableTimeFrom) || selectedTime.isAfter(availableTimeTo)) {
  //       toast.error("Selected time is not within available time range");
  //       setIsAvailable(false); // set isAvailable to false
  //       return;
  //     }
  
  //     // Check if booking slot is available
  //     const response = await axios.post(
  //       "/api/user/check-booking-avilability",
  //       {
  //         doctorId: params.doctorId,
  //         date: date,
  //         time: time,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  
  //     dispatch(hideLoading());
  
  //     if (response.data.success) {
  //       toast.success(response.data.message);
  //       setIsAvailable(true);
  //     } else {
  //       toast.error(response.data.message);
  //       setIsAvailable(false); // set isAvailable to false
  //     }
  //   } catch (error) {
  //     toast.error("Error checking booking availability");
  //     setIsAvailable(false); // set isAvailable to false
  //     dispatch(hideLoading());
  //   }
  // };

  const checkAvailability = async () => {
    try {
      dispatch(showLoading());
  
      // Check if selected date is within range
      const selectedDate = moment(date, "DD-MM-YYYY");
      const availableDateFrom = moment(doctor.availableFrom, "DD-MM-YYYY");
      const availableDateTo = moment(doctor.availableTo, "DD-MM-YYYY");
  
      if (selectedDate.isBefore(availableDateFrom) || selectedDate.isAfter(availableDateTo)) {
        toast.error("Selected date is not within available date range");
        dispatch(hideLoading());
        return;
      }
  
      // Check if selected time is within range
      const selectedTime = moment(time, "HH:mm");
      const availableTimeFrom = moment(doctor.timings[0], "HH:mm");
      const availableTimeTo = moment(doctor.timings[1], "HH:mm");
  
      if (selectedTime.isBefore(availableTimeFrom) || selectedTime.isAfter(availableTimeTo)) {
        toast.error("Selected time is not within available time range");
        dispatch(hideLoading());
        setTimeout(() => {
          setIsAvailable(false);
        }, 2000);
        return;
      }
  
      // Check if booking slot is available
      const response = await axios.post(
        "/api/user/check-booking-avilability",
        {
          doctorId: params.doctorId,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
  
      dispatch(hideLoading());
  
      if (response.data.success) {
        toast.success(response.data.message);
        setIsAvailable(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error checking booking availability");
      dispatch(hideLoading());
    }
  };



  const bookNow = async () => {
    setIsAvailable(false);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctor,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        
        toast.success(response.data.message);
        navigate('/appointments')
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);
  return (
    <Layout>
      {doctor && (
        <div>
          <h1 className="page-title">
            {doctor.firstName} {doctor.lastName}
          </h1>
          <hr />
          <Row gutter={20} className="mt-5" align="middle">

            <Col span={8} sm={24} xs={24} lg={8}>
              <img
                src="https://thumbs.dreamstime.com/b/finger-press-book-now-button-booking-reservation-icon-online-149789867.jpg"
                alt=""
                width="100%"
                height='400'
              />
            </Col>
            <Col span={8} sm={24} xs={24} lg={8}>
              <h1 className="normal-text">
                <b>Timings :</b> {doctor.timings[0]} - {doctor.timings[1]}
              </h1>
              <p>
                <b>Phone Number : </b>
                {doctor.phoneNumber}
              </p>
              <p>
                <b>Address : </b>
                {doctor.address}
              </p>
              <p>
                <b>Fee per Visit : </b>
                {doctor.feePerCunsultation}
              </p>
              <p>
                <b>Website : </b>
                {doctor.website}
              </p>
              <div className="d-flex flex-column pt-2 mt-2">
                <DatePicker
                  format="DD-MM-YYYY"
                  onChange={(value) => {
                    setDate(moment(value).format("DD-MM-YYYY"));
                    setIsAvailable(false);
                  }}
                />
                <TimePicker
                  format="HH:mm"
                  className="mt-3"
                  onChange={(value) => {
                    setIsAvailable(false);
                    setTime(moment(value).format("HH:mm"));
                  }}
                />
              {!isAvailable &&   <Button
                  className="primary-button mt-3 full-width-button"
                  onClick={checkAvailability}
                >
                  Check Availability
                </Button>}

                {isAvailable && (
                  <Button
                    className="primary-button mt-3 full-width-button"
                    onClick={bookNow}
                  >
                    Book Now
                  </Button>
                )}
              </div>
            </Col>
           
          </Row>
        </div>
      )}
    </Layout>
  );
}

export default BookAppointment;
