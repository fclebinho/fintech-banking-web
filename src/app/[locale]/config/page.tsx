import React from "react";

// import { Container } from './styles';

const Config: React.FC = () => {
  return (
    <div className="container flex flex-col max-w-7xl">
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>API_URL_AUTH</td>
            <td>{process.env.API_URL_AUTH}</td>
          </tr>
          <tr>
            <td>API_URL</td>
            <td>{process.env.API_URL}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Config;
