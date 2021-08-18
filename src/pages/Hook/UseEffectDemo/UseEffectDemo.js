import React, { useEffect, useState } from 'react'

export default function UseEffectDemo(props)
{
    const [number, setNumber] = useState(1);

    const [like,setLike] = useState(1);


    //dùng để call ipa và không muốn chạy state tiếp theo phải dùng tham số thứ 2 [] thì nó không tương ứng state nào hết
    //nó không tương ứng state nào thì nó chỉ chạy 1 lần đầu tiên
    //thay thế componentDidMount, componentDidUpdate UnMount hay sử dụng thư viện
    // useEffect(() =>
    // {
    //     //callback  function chạy sau khi giao diện render
    //     //thay thế didMount và didUpdate ứng với LifeCycle
    //     console.log('didMount');
    //     console.log('didUpdate')
    // }, [])


    useEffect(() =>
    {
        console.log('didMount Number');
    }, []);
    

    useEffect(() =>
    {
        //sẻ chạy lần đầu khi state like thay đổi thì kích hoạt
        console.log('didMount Like');
    },[like]/*tham số thứ 2 [rổng] => chạy 1 lần sao render 
          còn muốn nó chạy lại thì thêm thằng state vào [state]
    */);

    
    //trước khi component biến mất khỏi giao diện  thì hàm này sẻ kích hoạt
    useEffect(() =>
    {
        return () =>
        {
            //dùng để hủy biến chạy ngầm
            console.log('will unMount')
        }
    })

    return (
        <div className="container">
            <h3> Use Effect Hook</h3>
            <h4> Use Effect Hook chưa có tham số thứ 2</h4>
            <h3>Number: {number}</h3>
            <button className="btn btn-outline-primary" onClick={() =>
            {
                setNumber(number +1);
            }}>+</button>
            <h4> Use Effect Hook đã có tham số thứ 2</h4>
            <h3>Like: {like}</h3>
            <button className="btn btn-outline-primary" onClick={() =>
            {
                setLike(like +1);
            }}>+</button>
        </div>
    )
}
