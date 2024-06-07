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
            <td>NEXT_PUBLIC_AUTHORIZE_API_URL</td>
            <td>{process.env.NEXT_PUBLIC_AUTHORIZE_API_URL}</td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_API_URL</td>
            <td>{process.env.NEXT_PUBLIC_API_URL}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Config;
