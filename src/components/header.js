import { signOut } from "next-auth/react";
import Link from "next/link";
import { Col, Row } from 'antd';
import React from 'react';

export default function Header() {
    return (<header>
        <nav class="bg-white border-gray-800 px-40 lg:px-40 py-5 dark:bg-green-700 p4">

        <Row>
          <Col span={8}>
            <h1>SMIT blog hackaton</h1>
          </Col>

          <Col span={8}></Col>

          <Col span={8}>
            <Link href="/auth/login">
              Login
            </Link>
          </Col>
        </Row> 
      

        </nav>
    </header>);
}


