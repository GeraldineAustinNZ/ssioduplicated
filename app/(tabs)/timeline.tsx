import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useAuthStore } from '@/stores/authStore';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/Card';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import {
  Calendar,
  Clock,
  FileText,
  CircleCheck as CheckCircle,
  Circle,
  CircleAlert as AlertCircle,
  ChevronRight,
  Hospital,
  User,
  CalendarClock,
  ArrowRight,
  Hourglass,
} from 'lucide-react-native';
import { Database } from '@/types/database';
