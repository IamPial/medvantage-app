"use client"

import { useRouter } from "next/navigation";
import {
  Form,
  TextField,
  Input,
  Select,
  Label,
  ListBox,
  Button,
  Card,
  TextArea
} from "@heroui/react";
import { LuFilePlus2, LuStethoscope, LuMapPin, LuImage, LuSparkles } from "react-icons/lu";
import { toast } from "sonner";
import { imgUpload } from "@/lib/imgUploader";
import { createTrial } from "@/lib/actions/exploreTrials";



interface TrialFormData {
  title: string;
  disease: string;
  hospital: string;
  country: string;
  location: string;
  phase: string;
  status: string;
  image?: string;
  description: string;
}

export default function AddTrialPage() {
  const router = useRouter();


  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const trialData = Object.fromEntries(formData.entries()) as Omit<TrialFormData, "image">;

    const imageFile = formData.get("image") as File;

    let imageUrl: string | undefined;

    if (imageFile && imageFile.size > 0) {
      const uploadedImage = await imgUpload(imageFile);
      imageUrl = uploadedImage.url;
    }


    const createTrialData = {
      ...trialData,
      image: imageUrl,
    };

    const result = await createTrial(createTrialData);
    if (result) {
      toast.success("New Clinical Trial Added Successfully", {
        style: {
          color: "#00c950",
        },
      });
      router.push("/explore")
      router.refresh()
    }

  };




  // Consistent Light theme input styles
  const inputStyle = `rounded-xl bg-white border border-zinc-200 text-zinc-900 w-full shadow-sm mt-1.5 p-2.5 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-zinc-400`;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-1 sm:p-2 selection:bg-emerald-500/10 text-zinc-900">

      {/* Header Section */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
            <LuFilePlus2 className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Add New Clinical Trial</h1>
        </div>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Deploy a new research protocol into the system grid by providing structural metrics.
        </p>
      </div>

      {/* Main Form Card Container */}
      <Card className="bg-white border border-zinc-100 shadow-sm shadow-zinc-200/50 rounded-2xl overflow-hidden">
        <Form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-6 w-full">

          {/* Section 1: Core Diagnostics */}
          <div>
            <h3 className="text-sm font-bold text-zinc-800 flex items-center gap-1.5 border-b border-zinc-100 pb-2 mb-4 uppercase tracking-wider text-[11px]">
              <LuStethoscope className="text-emerald-600 text-sm" /> Core Protocol Identification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Title Input */}
              <TextField isRequired name="title" type="text" className="md:col-span-2">
                <label className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Trial Title</label>
                <Input className={inputStyle} placeholder="e.g., AI-Guided Breast Cancer Detection" />
              </TextField>

              {/* Disease Target */}
              <TextField isRequired name="disease" type="text">
                <label className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Target Disease</label>
                <Input className={inputStyle} placeholder="e.g., Breast Cancer" />
              </TextField>

              {/* Research Phase Selector (Using New Anatomy) */}
              <div className="flex flex-col">
                <Label className="text-zinc-700 text-xs font-bold uppercase tracking-wider mb-1.5">Research Phase</Label>
                <Select
                  isRequired
                  name="phase"
                  aria-label="Select Trial Phase"
                  className="w-full text-zinc-900 text-sm transition-all"
                >
                  <Select.Trigger className="h-10 px-3 w-full rounded-xl border border-zinc-200 bg-white flex items-center justify-between shadow-sm outline-none focus:border-emerald-500">
                    <Select.Value className="text-sm placeholder:text-zinc-400" />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-white border border-zinc-100 shadow-xl rounded-xl p-1 text-zinc-900">
                    <ListBox>
                      <ListBox.Item key="Phase I" textValue="Phase I" className="rounded-lg p-2 text-sm hover:bg-zinc-50 cursor-pointer outline-none">
                        <Label>Phase I</Label>
                      </ListBox.Item>
                      <ListBox.Item key="Phase II" textValue="Phase II" className="rounded-lg p-2 text-sm hover:bg-zinc-50 cursor-pointer outline-none">
                        <Label>Phase II</Label>
                      </ListBox.Item>
                      <ListBox.Item key="Phase III" textValue="Phase III" className="rounded-lg p-2 text-sm hover:bg-zinc-50 cursor-pointer outline-none">
                        <Label>Phase III</Label>
                      </ListBox.Item>
                      <ListBox.Item key="Phase IV" textValue="Phase IV" className="rounded-lg p-2 text-sm hover:bg-zinc-50 cursor-pointer outline-none">
                        <Label>Phase IV</Label>
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Recruitment Status Selector (Using New Anatomy) */}
              <div className="flex flex-col">
                <Label className="text-zinc-700 text-xs font-bold uppercase tracking-wider mb-1.5">Initial Status</Label>
                <Select
                  isRequired
                  name="status"
                  aria-label="Select Recruitment Status"
                  className="w-full text-zinc-900 text-sm transition-all"
                >
                  <Select.Trigger className="h-10 px-3 w-full rounded-xl border border-zinc-200 bg-white flex items-center justify-between shadow-sm outline-none focus:border-emerald-500">
                    <Select.Value className="text-sm placeholder:text-zinc-400" />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-white border border-zinc-100 shadow-xl rounded-xl p-1 text-zinc-900">
                    <ListBox>
                      <ListBox.Item key="Active" textValue="Active" className="rounded-lg p-2 text-sm hover:bg-zinc-50 cursor-pointer outline-none">
                        <Label>Active</Label>
                      </ListBox.Item>
                      <ListBox.Item key="Recruiting" textValue="Recruiting" className="rounded-lg p-2 text-sm hover:bg-zinc-50 cursor-pointer outline-none">
                        <Label>Recruiting</Label>
                      </ListBox.Item>
                      <ListBox.Item key="Completed" textValue="Completed" className="rounded-lg p-2 text-sm hover:bg-zinc-50 cursor-pointer outline-none">
                        <Label>Completed</Label>
                      </ListBox.Item>
                      <ListBox.Item key="Suspended" textValue="Suspended" className="rounded-lg p-2 text-sm hover:bg-zinc-50 cursor-pointer outline-none">
                        <Label>Suspended</Label>
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            </div>
          </div>


          <div>
            <h3 className="text-sm font-bold text-zinc-800 flex items-center gap-1.5 border-b border-zinc-100 pb-2 mb-4 uppercase tracking-wider text-[11px]">
              <LuMapPin className="text-emerald-600 text-sm" /> Facility Deployment Logistics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <TextField isRequired name="hospital" type="text">
                <label className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Host Hospital / Lab</label>
                <Input className={inputStyle} placeholder="e.g., Mayo Clinic" />
              </TextField>

              <TextField isRequired name="location" type="text">
                <label className="text-zinc-700 text-xs font-bold uppercase tracking-wider">City / Facility Node</label>
                <Input className={inputStyle} placeholder="e.g., Rochester" />
              </TextField>

              <TextField isRequired name="country" type="text">
                <label className="text-zinc-700 text-xs font-bold uppercase tracking-wider">Country</label>
                <Input className={inputStyle} placeholder="e.g., USA" />
              </TextField>
            </div>
          </div>


          <div>
            <h3 className="text-sm font-bold text-zinc-800 flex items-center gap-1.5 border-b border-zinc-100 pb-2 mb-4 uppercase tracking-wider text-[11px]">
              <LuImage className="text-emerald-600 text-sm" /> Contextual Visuals & Description
            </h3>

            <div className="space-y-4">
              <TextField name="image" type="file" className="w-full">
                <Label className="text-zinc-700 text-xs font-bold uppercase tracking-wider">
                  Image
                </Label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    name='image'
                    className={`${inputStyle}  `}

                  />
                </div>
              </TextField>




              <div className="flex flex-col">
                <label className="text-zinc-700 text-xs font-bold uppercase tracking-wider mb-1.5">Brief Clinical Abstract</label>
                <TextArea
                  name="description"
                  placeholder="Combining AI-assisted imaging with early breast cancer diagnosis..."
                  className="w-full min-h-[100px] rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm p-2.5 text-sm focus:border-emerald-500 focus:outline-none transition-all placeholder:text-zinc-400 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Action Footer Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-100">
            <Button
              type="button"
              onClick={() => router.back()}
              className="bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 font-medium px-5 py-2.5 rounded-full text-sm transition-all cursor-pointer shadow-none"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50"
            >
              <LuSparkles className="text-sm" />
              Publish Trial
            </Button>
          </div>

        </Form>
      </Card>
    </div>
  );
}