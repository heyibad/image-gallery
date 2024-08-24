"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UploadImg = () => {
     const router = useRouter()
    return (
       
                <div className="md:mr-2 mr-4 flex">
                      <Button asChild >
                        
                        <CldUploadButton
                        
                            uploadPreset="ml_default"
                            onUpload={(result: any) => {
                              setTimeout(()=>{
                                router.refresh()
                              },1000)
                                // { public_id, secure_url, etc }
                            }}
                            
                        >
                          <div className="flex gap-2 item-center ">
                        <Upload  size={18}/>
                        <span className="hidden md:block">
                            Upload
                        </span>
                    </div>
                        </CldUploadButton>

                </Button>
                </div>
         
    );
};

export default UploadImg;
