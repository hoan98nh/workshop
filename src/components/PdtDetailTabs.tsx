import { Tabs, TabsProps } from 'antd';
import React from 'react'


const items: TabsProps['items'] = [
    {
        key: '1',
        label: <span className='font-medium'>Description</span>,
        children: <div className='text-[#A3A3A3]'>
            <p className='mb-3'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className='mb-8'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            <div className='grid grid-cols-2 gap-8'>
                <img src="https://picsum.photos/id/400/624/378" alt="" />
                <img src="https://picsum.photos/id/401/621/378" alt="" />
            </div>
        </div>,
    },
    {
        key: '2',
        label: <span className='font-medium'>Additional Information</span>,
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: <span className='font-medium'>Reviews [5]</span>,
        children: 'Content of Tab Pane 3',
    },
];

const PdtDetailTabs = () => {
    return (
        <div>
            <Tabs 
            defaultActiveKey="1" 
            items={items}
            // activeTabBarStyle={{ color: '#1890ff', fontWeight: 'bold' }}
            />
        </div>
    )
}

export default PdtDetailTabs