"use client";

import { BrandHeader } from './BrandHeader';
import { HelpButton } from './HelpButton';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export function Header() {
  const handleSaveAndExit = () => {
    console.log('Saving and exiting...');
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <BrandHeader />
        <div className="flex items-center gap-2">
          <HelpButton />
          <Button
            variant="secondary"
            onClick={handleSaveAndExit}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Save & Exit
          </Button>
        </div>
      </div>
    </header>
  );
}