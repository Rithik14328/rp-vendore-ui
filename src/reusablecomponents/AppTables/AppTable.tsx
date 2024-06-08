import React from 'react'

type tableprops={
    header:string[],
    data:[],
    column:string[]
}

function AppTable(props:tableprops) {
    const {header,data,column}=props
  return (
    <div>
        <table>
            <thead>
                <tr>
                    {
                        header.map((value,index)=>{
                        
                            return <th key={`th_${index}`}>{value}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        data.map((obj,index)=>{
                            return <tr key={`tr_${index}`}>
                                {
                                    column.map((key,ind)=>{
                                        return <td key={`td_${ind}`}>{obj[key]}</td>
                                    })
                                }
                            </tr>
                        })
                    }
            </tbody>
        </table>
    </div>
  )
}

export default AppTable