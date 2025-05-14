import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ejhvjqmenewcdbfgbcvn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqaHZqcW1lbmV3Y2RiZmdiY3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxOTEyODIsImV4cCI6MjA2Mjc2NzI4Mn0.o0Tu2-bVsSyITGHnWh0lFh2aQZffB1CaaFGyiEIVm0A'
);

export default supabase;
