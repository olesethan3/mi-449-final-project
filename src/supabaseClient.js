import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1'

const supabaseUrl = 'https://itcshgyluirvvlplrivf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Y3NoZ3lsdWlydnZscGxyaXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0ODAyNDQsImV4cCI6MjAyOTA1NjI0NH0.G0o8RBq7XbrBuOBBBKtvsFYX9dtb0Basc5bAJzdluJ8'
export const supabase = createClient(supabaseUrl, supabaseKey)