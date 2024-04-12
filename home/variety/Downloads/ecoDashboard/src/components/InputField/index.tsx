import React from 'react'

const InputField: React.FC<any> = ({
    label,
    value,
    onChange,
    name,
    id,
    placeholder,
    onError,
    onTouched,
    onBlur,
    large,
    type='text',
    options,
    iconLabel
}) => {
    switch(type) {
        case "select-input":
            return (
                <div className='w-full'>
                    <label htmlFor={id} className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                    <select 
                        id={id} 
                        name={name} 
                        onChange={onChange} 
                        className={`w-full border border-black hover:brightness-[90%] active:scale-[0.99] duration-100 h-max flex items-center px-5 ${large ? 'py-3' : 'py-2'} rounded-full text-[16px] bg-white text-black`}
                        value={value} 
                        onBlur={onBlur}
                        required 
                    >
                        {
                            options?.map((data: any, index: number) => (
                                <option key={index} value={data?.value}>{data?.label}</option>
                            ))
                        }
                    </select>
                    {
                        onError && onTouched ? (
                            <small className='text-[red] text-[12px] font-normal my-2'>
                                {onError}
                            </small>
                        ): null
                    }
                </div>
            )
        case "file-input" : 
            return (
                <div className='w-full'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">{label}</label>
                    <input className="block w-full text-sm text-gray-900 border border-black rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 p-3 focus:outline-none dark:bg-black dark:border-black dark:placeholder-gray-400" onChange={onChange} name={name} id={id} type="file" />
                </div>
            )
        case "textarea-input": 
            return (
            <div className='w-full'>
                <div className='flex items-center w-max mb-4'>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                  {iconLabel ? iconLabel : null}
                </div>
                <textarea 
                    id={id} 
                    name={name} 
                    onChange={onChange} 
                    className={`w-full border border-black hover:brightness-[90%] active:scale-[0.99] duration-100 h-[100px] flex items-center px-4 ${large ? 'py-3' : 'py-2'} rounded-[10px] text-[16px] bg-white text-black`}
                    placeholder={placeholder} 
                    value={value} 
                    onBlur={onBlur}
                    required 
                >
                </textarea>
                {
                    onError && onTouched ? (
                        <small className='text-[red] text-[12px] font-normal my-2'>
                            {onError}
                        </small>
                    ): null
                }
            </div>
            )
        default:
            return (
              <div className='w-full'>
                  <div className='flex items-center w-max mb-4'>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                    {iconLabel ? iconLabel : null}
                  </div>
                  <input 
                      id={id} 
                      type={type} 
                      name={name} 
                      onChange={onChange} 
                      className={`w-full border border-black hover:brightness-[90%] active:scale-[0.99] duration-100 h-max flex items-center px-5 ${large ? 'py-3' : 'py-2'} rounded-full text-[16px] bg-white text-black`}
                      placeholder={placeholder} 
                      value={value} 
                      onBlur={onBlur}
                      required 
                  />
                  {
                      onError && onTouched ? (
                          <small className='text-[red] text-[12px] font-normal my-2'>
                              {onError}
                          </small>
                      ): null
                  }
              </div>
            )
    }
}

export default InputField
