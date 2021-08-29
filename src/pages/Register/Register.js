import * as Yup from 'yup'

import { dangKyAction, dangKyAsynAction } from '../../redux/action/QuanLyNguoiDungAction';

import {GROUP_ID} from '../../util/setting'
import React from "react";
import {history} from '../../App.js'
import { stringLiteralTypeAnnotation } from '@babel/types';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";

// import { values } from 'lodash';

export default function Register(props)
{
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: { //tên gằn liền name
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: GROUP_ID
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống').min(6, 'Tài khoản từ 6-32 ký tự').max(32, 'Tài khoản từ 6-32 ký tự'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống'),
            email: Yup.string().required('Email không được bỏ trống').email('Email không đúng định dạng'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống').matches(/^[A-Z a-z]+$/,'Họ tên không đúng định dạng')
        }),
        onSubmit: (values) =>
        {
            console.log({ values })
            const action = dangKyAsynAction(values);
            dispatch(action);
            //thành công => chuyển hướng trang
            alert('đăng kí thành công')
            history.push('/login')
        }
       
        
        
    })
    
	return (
		<form
			className="contaienr d-flex"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
            }}
            onSubmit={formik.handleSubmit}
		>
			<div style={{ width: "100%" }}>
				<h3>Đăng kí</h3>
				<div className="form-group">
					<p>Tài Khoản</p>
                    <input type="text" className="form-control" name="taiKhoan" onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                        <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
                    ):null}
				</div>
				<div className="form-group">
					<p>Họ Tên</p>
                    <input type="text" className="form-control" name="hoTen" onChange={formik.handleChange}
                        onBlur={ formik.handleBlur}/>
                    {formik.touched.hoTen && formik.errors.hoTen ? (
                        <div className='alert alert-danger'>{formik.errors.hoTen}</div>
                    ):null}
				</div>
				<div className="form-group">
					<p>Mật Khẩu</p>
                    <input type="text" className="form-control" name="matKhau" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                        <div className='alert alert-danger'>{formik.errors.matKhau}</div>
                    ):null}
				</div>

				<div className="form-group">
					<p>Email</p>
                    <input type="text" className="form-control" name="email" onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='alert alert-danger'>{formik.errors.email}</div>
                    ):null}
				</div>
				<div className="form-group">
					<p>Số Diện Thoại</p>
					<input type="text" className="form-control" name="soDt" onChange={ formik.handleChange}/>
				</div>
				<div className="form-group">
					<button className="btn btn-ouline-success" type='Submit'>Đăng kí</button>
				</div>
			</div>
		</form>
	);
}
