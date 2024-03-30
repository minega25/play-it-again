'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRendering } from '../helpers/use-rendering';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { CompositionProps, COMP_NAME } from '../types/constants';
import { AlignEnd } from './AlignEnd';
import { Button } from '../components/ui/button';
import { InputContainer } from './Container';
import { DownloadButton } from './DownloadButton';
import { ErrorComp } from './Error';
import { ProgressBar } from './ProgressBar';
import { Spacing } from './Spacing';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const formSchema = z.object({
  duration: z.number().min(1),
  backgroundImage: z.string().optional(),
});

export const RenderControls: React.FC<{
  setBackgroundImage: React.Dispatch<React.SetStateAction<string>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  inputProps: z.infer<typeof CompositionProps>;
}> = ({ setBackgroundImage, setDuration, inputProps }) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      duration: 15,
      backgroundImage: '',
    },
  });

  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      console.log('value', value);
      setDuration(Number(value.duration));
      setBackgroundImage(value?.backgroundImage || '');
    });
    return () => subscription.unsubscribe();
  }, [form, form.watch]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('values', values);
    renderMedia();
  }

  return (
    <InputContainer>
      {state.status === 'init' ||
      state.status === 'invoking' ||
      state.status === 'error' ? (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration (in minutes)</FormLabel>
                    <FormControl>
                      <Input placeholder="duration in minutes" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the duration of the count down in minutes.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="backgroundImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Background Image</FormLabel>
                    <FormControl>
                      <Input type="file" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the background image to be used
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Render</Button>
            </form>
          </Form>
          {state.status === 'error' ? (
            <ErrorComp message={state.error.message}></ErrorComp>
          ) : null}
        </>
      ) : null}
      {state.status === 'rendering' || state.status === 'done' ? (
        <>
          <ProgressBar
            progress={state.status === 'rendering' ? state.progress : 1}
          />
          <Spacing></Spacing>
          <AlignEnd>
            <DownloadButton undo={undo} state={state}></DownloadButton>
          </AlignEnd>
        </>
      ) : null}
    </InputContainer>
  );
};
