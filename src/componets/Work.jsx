import React from 'react'
import WorkiItem from './WorkiItem'

const data = [
   {año: 1995 ,
    puesto: '  Diseñador Gráfico' ,
    duración: '  1995-1996',
    detalles:' Diseño de materiales gráficos, representaciones gráficas en despacho del ramo de Ingeniería Civil(Proveedora de Líne de Conducción).'
    },
    {
        año: 1997,
    puesto: '  Diseñador Gráfico' ,
    duración: '  1997-1998',
    detalles:' Diseño de materiales gráficos, ilustraciones gráficas,gráfica de estands para exposiciones para clientes como Coca Cola, Comex, Sanborns en despacho de Diseño Gráfico("S" Diseño).'
    },
    {
        año: 1998,
    puesto: '  Diseñador Gráfico' ,
    duración: '  1998-1999',
    detalles:' Diseño de materiales gráficos,diseño de impresos para la industria gráfica para clientes como Coca Cola, Kraft,Procter & Gamble en inprenta (Imagrafic).'
    },
    {
        año: 1999,
    puesto: '  Diseñador Gráfico' ,
    duración: '  1999-2003',
    detalles:' Diseño de materiales gráficos, diseño de impresos(forma continua) para clientes diversos como Ópticas Kaufman, varios despachos aduanales, en imprenta(Olympic Imprenta y Diseño).'
    },
    {
        año: 2004,
    puesto: '  Diseñador Gráfico' ,
    duración: '  2004-2018',
    detalles:' Diseño de materiales gráficos, procesos de imagen digital fotográfica , impresión digital fotogrtáfica a través de química y en tintas(plotter) en empresa de impresión digital(Grupo Mangas Hnos.).'
    },
    {
        año: 2018,
    puesto: '  Diseñador Gráfico' ,
    duración: '  2018-2022',
    detalles:' Diseño web, interfaces de ususario.'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 py-16 '>
        <h1 className="text-4xl font-bold text-center text-[#8F7860]">Work</h1>
        {data.map((item, idx)=>(
            <WorkiItem key={idx} 
            año={item.año} 
            puesto={item.puesto} 
            duración={item.duración} 
            detalles={item.detalles} />
        )
        )}
    </div>
  )
}

export default Work