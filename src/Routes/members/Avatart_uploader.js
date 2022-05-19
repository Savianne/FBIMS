import './Avatar_uploader.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import axios from 'axios';

const AVATAR_UPLOADER = () => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    //State
    const [picture, setPicture] = useState(null);
    const [picture_to_change, setPicToChange] = useState(null);
    const [isValidImage, setValidationResult] = useState('init');
    const [uploading, setUploadingState] = useState(false);
    const [uploaded_picture, setUploadedPic] = useState(null);
    const [show_blur, blurState] = useState(false);

    //Refs
    const drop_area = useRef(null);
    const image_input = useRef(null);
    const image_input_to_change = useRef(null);
    const image_preview = useRef(null);
    const image_preview_blur = useRef(null);
    const blurd = useRef(null);
    const image_validation = useRef(null);
    const upload_progress = useRef(null);
    const btn_group = useRef(null);

    useEffect(() => {
        if(picture && picture_to_change === null) {
            setValidationResult('validating');
            const file_read = new FileReader();
            file_read.onload = () => {
                image_validation.current.src = file_read.result;
            }

            file_read.readAsDataURL(picture);
        }

        // if(picture && picture_to_change) {
        //     $(image_preview_blur.current).fadeIn(1000);
        //     $(image_preview.current).fadeIn(1000);
        // }

    }, [picture]);

    useEffect(() => {
        if(picture_to_change) {
            setValidationResult('validating');
            const file_read = new FileReader();
            file_read.onload = () => {
                image_validation.current.src = file_read.result;
            }

            file_read.readAsDataURL(picture_to_change);
        }

    }, [picture_to_change]);

    useEffect(() => {
        if(isValidImage === 'valid') {
            const file_read = new FileReader();
            file_read.onload = () => {
                image_preview_blur.current.style.backgroundImage = `url(${file_read.result})`;
                image_preview.current.style.backgroundImage = `url(${file_read.result})`;

                setUploadingState('onupload');
            }

            file_read.readAsDataURL(picture);
        }
    }, [isValidImage]);

    useEffect(() => {
        if(show_blur) {
            $(blurd.current).css({opacity: '0.50'});
            $(btn_group.current).slideDown(200, 'swing'); 
        } else {
            $(blurd.current).css({opacity: '1'});
            $(btn_group.current).slideUp(200, 'swing'); 
        }
    }, [show_blur])

    useEffect(() => {
        if(uploading === 'onupload') {
            const formData = new FormData();
            formData.append("picture", picture);

            const config = {
                onUploadProgress: function(progressEvent) {
                    var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    $(upload_progress.current).css({width: percentCompleted+'%'});
                }
            }

            axios.post('http://localhost:3005/upload', formData, config)
            .then(res => {
                console.log(res.data.picture)
                if(res.data.ok) {
                    if(picture_to_change) setPicToChange(null);
                    setUploadedPic(res.data.picture)
                    setUploadingState(false);
                }
            })
            .catch((err) => setUploadingState('onerror'))
        }
    }, [uploading])
    return <> 

        <div className="avatar-uploader-container">
            <input type="file" accept='image/*' ref={image_input_to_change} onChange={(e) => setPicToChange(e.target.files[0])} hidden/>
            {
                picture === null || (isValidImage === 'validating' && picture_to_change === null)? <>
                    <div className="drop-area global-border"
                    style={{
                        ...colorscheme.elements.globalBorder
                    }}
                    onDragEnter={(e) => {
                        e.preventDefault();
                        $(drop_area.current).css({borderColor: colorscheme.elements.textPrimary.color});
                    }}
                    onDragLeave={(e) => {
                        $(drop_area.current).css({borderColor: colorscheme.elements.globalBorder.borderColor});
                    }}
                    onDragOver={(e) => {
                        e.preventDefault();
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        $(drop_area.current).css({borderColor: colorscheme.elements.globalBorder.borderColor});
                        const image = e.dataTransfer.files[0];
                        if(image.type.includes('image')) {
                            setPicture(image);
                        } else {
                            alert('Not an image file');
                        }
                    }}
                    ref={drop_area}>
                        <div>
                            <i class="fas fa-cloud-upload-alt text-light"
                            style={{
                                ...colorscheme.elements.textLight,
                                fontSize: '50px',
                            }}></i>
                            <p className="text-light"
                            style={{
                                ...colorscheme.elements.textLight,
                                width: '100%',
                                textAlign: 'center',
                                marginTop: '15px',
                            }}>Drag & Drop Image here</p>
                            <p
                            style={{
                                ...colorscheme.elements.textLight,
                                width: '100%',
                                textAlign: 'center',
                                marginTop: '15px',
                                marginBottom: '15px',
                                fontSize: '12px'
                            }}>or</p>
                            <span className="btn btn-primary"
                            style={{
                                ...colorscheme.elements.btnPrimary
                            }}
                            onClick={() => {
                                image_input.current.click();
                            }}>
                                Browse Image
                            </span>
                            <input type="file" accept='image/*' ref={image_input} onChange={(e) => setPicture(e.target.files[0])} hidden/>
                        </div>
                        {
                            isValidImage === 'validating'? <>
                                <div className="image-onloading blur-bg-effect text-solid"
                                style={{
                                    ...colorscheme.elements.blurBgEffect,
                                    ...colorscheme.elements.textSolid
                                }}>
                                    <i className="fas fa-circle-notch fa-spin" style={{marginRight: '5px'}}></i>
                                    Loading...
                                </div>
                            </> : ''
                        }
                    </div>
                </> : ""
            }

            {
                (picture && isValidImage === 'valid') || (picture_to_change && isValidImage === 'validating') || (picture && picture_to_change)? <>
                    <div className="image-preview text-solid global-border" 
                    style={{
                        // ...colorscheme.elements.blurBgEffect,
                        ...colorscheme.elements.textSolid,
                        ...colorscheme.elements.globalBorder
                    }}>
                        
                        <i className="blurd-back"
                        ref={image_preview_blur}></i>

                        <i className="blurd" style={{
                            backgroundColor: colorscheme.elements.lightContainer.backgroundColor,
                            backdropFilter: '2px'
                        }}
                        onMouseEnter={() => blurState(true)}
                        onMouseLeave={() => blurState(false)}
                        ref={blurd}></i>

                        <i className="picture global-border"
                        style={{
                            ...colorscheme.elements.globalBorder,
                        }}
                        onMouseEnter={() => blurState(true)}
                        onMouseLeave={() => blurState(false)}
                        ref={image_preview}></i>

                        {
                            uploading? <>
                                <i className="blurd" style={{
                                    backgroundColor: colorscheme.elements.lightContainer.backgroundColor,
                                }}></i>
                                {
                                    uploading === 'onupload'? <>
                                        <span className="uploading text-primary" style={{...colorscheme.elements.textPrimary}}>
                                            <div style={{
                                                backgroundColor: colorscheme.elements.blurBgEffect.backgroundColor
                                            }}>
                                                {/* <i className="fas fa-circle-notch fa-spin" style={{fontSize: '50px'}}></i> */}
                                                <p>Uploading...</p>
                                                <span className="upload-progress-base light-container" 
                                                style={{
                                                    ...colorscheme.elements.lightContainer
                                                }}>
                                                    <span className="progress-bar" 
                                                    style={{
                                                        backgroundColor: colorscheme.elements.textPrimary.color
                                                    }}
                                                    ref={upload_progress}></span>
                                                </span>
                                                <span className="btn btn-default"
                                                style={{
                                                    ...colorscheme.elements.btnDefault
                                                }}
                                                onClick={() => {
                                                    
                                                }}>
                                                    Cancel Upload
                                                </span>
                                            </div>
                                        </span>                            
                                    </> : <>
                                        <span className="uploading">
                                            <div style={{
                                                backgroundColor: colorscheme.elements.blurBgEffect.backgroundColor
                                            }}>
                                                <i className="fas fa-exclamation-triangle text-delete"
                                                style={{
                                                    ...colorscheme.elements.textDelete,
                                                    fontSize: '50px',
                                                    marginBottom: '5px'
                                                }}></i>
                                                <p className='text-delete' 
                                                style={{
                                                    ...colorscheme.elements.textDelete,
                                                    width: '100%',
                                                    height: 'fit-content',
                                                    textAlign: 'center',
                                                    marginBottom: '10px',
                                                    fontWeight: 600
                                                }}>Image not Uploaded due to an error occured!</p>

                                                <span className="btn btn-edit"
                                                style={{
                                                    ...colorscheme.elements.btnEdit
                                                }}
                                                onClick={() => {
                                                    image_input_to_change.current.click();
                                                }}>Change</span>

                                                <span className="btn btn-delete"
                                                style={{
                                                    ...colorscheme.elements.btnDelete,
                                                    margin: '0 5px'
                                                }}
                                                onClick={() => {
                                                    setUploadingState(false)
                                                    setPicture(null);
                                                    setPicToChange(null);
                                                }}>Remove</span>

                                                <span className="btn btn-default"
                                                style={{
                                                    ...colorscheme.elements.btnDefault
                                                }}
                                                onClick={() => {
                                                    setUploadingState('onupload');
                                                }}>
                                                    Retry
                                                </span>
                                            </div>
                                        </span>
                                    </>
                                }
                            </> : ''
                        }

                        {
                            uploaded_picture && uploading === false && isValidImage !== 'validating'? <>
                                <div className="btn-group" style={{
                                    backgroundColor: colorscheme.elements.blurBgEffect.backgroundColor
                                }}
                                onMouseEnter={() => blurState(true)}
                                onMouseLeave={() => blurState(false)}
                                ref={btn_group}>
                                    <span className="btn btn-edit"
                                    style={{
                                        ...colorscheme.elements.btnEdit,
                                        marginRight: '5px'
                                    }}
                                    onClick={() => {
                                        image_input_to_change.current.click();
                                    }}>Change</span>
                                    <span className="btn btn-delete"
                                    style={{
                                        ...colorscheme.elements.btnDelete
                                    }}
                                    onClick={() => {
                                        setPicture(null);
                                        setPicToChange(null);
                                    }}>Remove</span>
                                </div>
                            </> : ''
                        }

                        {/* {
                            isValidImage === 'validating'? <>
                                <div className="image-onloading blur-bg-effect text-solid"
                                style={{
                                    ...colorscheme.elements.blurBgEffect,
                                    ...colorscheme.elements.textSolid
                                }}>
                                    <i className="fas fa-circle-notch fa-spin" style={{marginRight: '5px'}}></i>
                                    Loading...
                                </div>
                            </> : ''
                        } */}
                </div>
                </> : ""
            }

            <img ref={image_validation}
            style={{width: '0', height: '0'}} 
            onError={() => {
                if(picture && picture_to_change === null) setPicture(null);
                // if(picture_to_change) setPicToChange(null);
                alert('Invalid Image!');
                setValidationResult('init');
            }} 
            onLoad={() => {
                // $(image_preview.current).fadeOut(20)
                // $(image_preview_blur.current).fadeOut(20);
                setValidationResult('valid');
                if(picture_to_change) setPicture(picture_to_change);
            }}/>
        </div>
    </>
}

export default AVATAR_UPLOADER;