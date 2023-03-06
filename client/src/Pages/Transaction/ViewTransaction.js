import React, { useEffect, useState } from "react";
// import { useEffect } from 'react'
// import dateFormatter from '../.../../../utils/dateFormatter'
import baseUrl from "../../utils/baseUrl";
import moment from "moment";
import axios from "axios";
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const ViewTransaction = () => {

  // Date wise data filetr variable
  const [startDate, setStartDate] = useState(moment(new Date()).toISOString());
  const [endDate, setEndDate] = useState(moment(new Date()).toISOString());
  console.log(startDate, endDate);

  // Type of amount filter
  const [selectedbutton, setselectedbutton] = useState("all");
  const [results, setResults] = useState([]);
  const [income, setincome] = useState("");
  const [expense, setexpense] = useState("");

  // All Transactions Total
  const [etotal, setetotal] = useState("");
  const [itotal, setitotal] = useState("");
  const [ttotal, setttotal] = useState("");


  // All Transaction percentage
  const [expensepercentage, setexpensepercentage] = useState("");
  const [incomepercentage, setincomepercentage] = useState("");
  const [filterarray, setfilterarray] = useState("");

  useEffect(() => {
    getAllResults();
    // getAllResults();
    // getAllResults();
    // getAllResults();
    // getAllResults();
  }, [selectedbutton, etotal, itotal]);

  const getAllResults = async () => {
    try {
      const usersid = localStorage.getItem("userInfo");
      console.log(usersid);
      const result = await axios.get(
        `${baseUrl}/users/user-profile/${usersid}`
      );
      console.log(result.data.transaction);
      setResults(result.data.transaction);
      console.log(results);

      var incomefilter = results.filter((ifilter) => ifilter.type === "income");
      setincome(incomefilter);
      console.log(incomefilter);

      var finaltotal = 0;
      var t;
      for (t = 0; t < results.length; t++) {
        finaltotal += results[t].amount;
        console.log(results[t].amount);
      }

      console.log(finaltotal);
      setttotal(finaltotal);
      console.log(ttotal);
      var incometotal = 0;
      var i;
      for (i = 0; i < income.length; i++) {
        incometotal += income[i].amount;
        console.log(income[i].amount);
      }
      console.log(income);
      console.log(incometotal);
      setitotal(incometotal);

      var expensefilter = results.filter(
        (efilter) => efilter.type === "expense"
      );
      setexpense(expensefilter);
      console.log(expense);
      var expensetotal = 0;
      var j;
      for (j = 0; j < expense.length; j++) {
        expensetotal += expense[j].amount;
        console.log(expense[j].amount);
      }
      console.log(expense);
      console.log(expensetotal);
      setetotal(expensetotal);
      var re;
      re = Math.floor((etotal / ttotal) * 100);
      setexpensepercentage(re);

      var pe;
      pe = Math.floor((itotal / ttotal) * 100);
      setincomepercentage(pe);

      const addDays = (date, days = 1) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      };

      const dateRange = (start, end, range = []) => {
        if (start > end) return range;
        const next = addDays(start, 1);
        return dateRange(next, end, [...range, start]);
      };

      var range = dateRange(new Date(startDate), new Date(endDate));

      var daterange = range.map((date) => date.toISOString().slice(0, 10));
      console.log("====>", daterange);
      var datearray = [];
      daterange.forEach((element) => {
        var datefilterr = results.filter(
          (datefilter) => datefilter.date.split("T")[0] === element
        );
        datearray.push(datefilterr);
        console.log(datearray);
      });

      var newarray = [];
      datearray.forEach((element) => {
        if (element.length >= 1) {
          newarray.push(element);
        } else {
          console.log("error");
        }
      });
      console.log("hello", newarray);
      setfilterarray([...newarray]);
      console.log("filter", filterarray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setselectedbutton(event.target.value);
  };

  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

  const options = [
    { label: "all", value: "all" },
    { label: "expense", value: "expense" },
    { label: "income", value: "income" },
    { label: "selectdate", value: "selectdate" },
  ];

  return (
    <>
      {/* <div className="view-switch">
                <i className="zmdi zmdi-format-list-bulleted list"></i>
                <i className="zmdi zmdi-chart chart"></i>
            </div> */}

      <div className="typeList">
        <div>
          <Dropdown
            label="Select Transactions"
            options={options}
            value={selectedbutton}
            onChange={handleChange}
          />
        </div>
      </div>
      <table id="viewTran">
        {/* <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead> */}

        {selectedbutton === "all" ? (
          <div>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {results &&
              results.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.title}</td>
                    <td>{order.description}</td>
                    <td>{order.type}</td>
                    <td>{order.amount}</td>
                    <td>{order.date.split("T")[0].split("-").reverse().join("-")}</td>
                  </tr>
                );
              })}
            <tr>
              <td></td>
              <td></td>

              <td>Total Transacion Amount</td>
              <td>
                <h1>{ttotal}</h1>
              </td>
            </tr>
          </tbody>
          </div>  
          
        ) : selectedbutton === "income" ? (
          <div>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {income &&
                income.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{order.title}</td>
                      <td>{order.description}</td>
                      <td>{order.type}</td>
                      <td>{order.amount}</td>
                      <td>{order.date.split("T")[0].split("-").reverse().join("-")}</td>
                    </tr>
                  );
                })}
              <tr>
                <td>Income Percentage</td>
                <td>
                  <h1>{incomepercentage}%</h1>
                </td>

                <td>Total Income Amount</td>
                <td>
                  <h1>{itotal}</h1>
                </td>
              </tr>
            </tbody>
          </div>
        ) : selectedbutton === "selectdate" ? (
          <div>
            <input
              type="date"
              name="startDate"
              placeholder="Select From Date"
              autoComplete="off"
              value={startDate}
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
            />

            <input
              type="date"
              name="endDate"
              placeholder="Select From Date"
              autoComplete="off"
              value={endDate}
              onChange={(event) => {
                setEndDate(event.target.value);
              }}
            />
            <button type="submit" onClick={getAllResults}>
              search
            </button>
            <div>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              {filterarray &&
                filterarray.map((item, index) => (
                  <tbody key={index}>
                    {item.map((c, i) => (
                      <tr key={i}>
                        <td>{c.title}</td>
                        <td>{c.description}</td>
                        <td>{c.type}</td>
                        <td>{c.amount}</td>

                        <td>
                          {c.date.split("T")[0].split("-").reverse().join("-")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              {/* <tr>
              <td></td>
              <td></td>

              <td>Total Transacion Amount</td>
              <td>
                <h1>{ttotal}</h1>
              </td>
            </tr> */}
            </div>
          </div>
        ) : (
          <div>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {expense &&
                expense.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{order.title}</td>
                      <td>{order.description}</td>
                      <td>{order.type}</td>
                      <td>{order.amount}</td>
                      <td>{order.date.split("T")[0].split("-").reverse().join("-")}</td>

                    </tr>
                  );
                })}
              <tr>
                <td>Expense Percentage</td>
                <td>
                  <h1>{expensepercentage}%</h1>
                </td>
                <td>Total Expense Amount</td>
                <td>
                  <h1>{etotal}</h1>
                </td>
              </tr>
            </tbody>
          </div>
        )}
      </table>
    </>
  );
};

export default ViewTransaction;
