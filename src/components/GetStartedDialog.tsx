import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import HowWeWork from "./HowWeWork";

interface GetStartedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetStartedDialog = ({ open, onOpenChange }: GetStartedDialogProps) => {
  const navigate = useNavigate();

  const handleStart = () => {
    onOpenChange(false);
    navigate("/templates");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl ">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">How It Works</DialogTitle>
          <DialogDescription className="text-base mt-1">
            Create your professional website in just 5 simple steps. No coding
            required!
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <HowWeWork />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground text-center">
            ✨ Preview your website before paying. Only pay when you're ready to
            go live.
          </p>
          <Button
            onClick={handleStart}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            Let's Create Your Website 🚀
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedDialog;
