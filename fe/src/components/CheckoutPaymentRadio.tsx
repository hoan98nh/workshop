import { CollapseProps, Collapse, Radio, Space } from 'antd';
import Panel from 'antd/es/cascader/Panel';
import React from 'react'


const text = `
  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label:  <Radio value={1}  className="w-full font-medium">Direct Bank Transfer</Radio>,
        children: <p className='text-[#A3A3A3]'>{text}</p>,
        showArrow: false
    },
    {
        key: '2',
        label: <Radio value={2} className="w-full font-medium">ATM Bank Transfer</Radio>,
        children: <p className='text-[#A3A3A3]'>{text}</p>,
        showArrow: false
    },
    {
        key: '3',
        label:  <Radio value={3}  className="w-full font-medium">Cash On Delivery</Radio>,
        children: <p className='text-[#A3A3A3]'>{text}</p>,
        showArrow: false,
        className: 'px-0'
    },
];

const CheckoutPaymentRadio = () => {
    return (
        <div>
            <Radio.Group >
                <Space direction="vertical">
                    <Collapse items={items} defaultActiveKey={['1']} ghost={true}/>
                </Space>
            </Radio.Group>
        </div>
    )
}

export default CheckoutPaymentRadio