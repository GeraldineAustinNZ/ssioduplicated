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

type SurgeryPlan = Database['public']['Tables']['surgery_plans']['Row'];
type RecoveryTask = Database['public']['Tables']['recovery_tasks']['Row'];
type Document = Database['public']['Tables']['documents']['Row'];

export default function TimelineScreen() {
  const { user, loading: authLoading } = useAuthStore();
  const [dataLoading, setDataLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [surgeryPlan, setSurgeryPlan] = useState<SurgeryPlan | null>(null);
  const [recoveryTasks, setRecoveryTasks] = useState<RecoveryTask[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    try {
      setError(null);
      await Promise.all([loadSurgeryPlan(), loadDocuments()]);
    } catch (err) {
      console.error('Error loading timeline data:', err);
      setError('Failed to load your timeline data. Please try again later.');
    } finally {
      setDataLoading(false);
    }
  };

  const loadSurgeryPlan = async () => {
    if (!user) return;
    try {
      const { data: plans, error } = await supabase
        .from('surgery_plans')
        .select('*')
        .eq('patient_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) throw error;

      if (plans?.length) {
        setSurgeryPlan(plans[0]);
        await loadRecoveryTasks(plans[0].id);
      }
    } catch (error) {
      console.error('Error loading surgery plan:', error);
      throw error;
    }
  };

  const loadRecoveryTasks = async (surgeryPlanId: string) => {
    try {
      const { data, error } = await supabase
        .from('recovery_tasks')
        .select('*')
        .eq('surgery_plan_id', surgeryPlanId)
        .order('due_date', { ascending: true });

      if (error) throw error;
      setRecoveryTasks(data || []);
    } catch (error) {
      console.error('Error loading recovery tasks:', error);
      throw error;
    }
  };

  const loadDocuments = async () => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .eq('patient_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error loading documents:', error);
      throw error;
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const formatTime = (dateString: string) =>
    new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

  const getStatusColor = (status: string) => {
    const statusColors: Record<string, string> = {
      planning: '#f59e0b',
      pre_op: '#3b82f6',
      surgery: '#dc2626',
      post_op: '#059669',
      completed: '#6b7280',
    };
    return statusColors[status] || '#9ca3af';
  };

  const getDocumentTypeIcon = (type: string) => {
    const colorMap: Record<string, string> = {
      medical_record: '#3b82f6',
      consent_form: '#059669',
      prescription: '#dc2626',
      insurance: '#f59e0b',
    };
    return <FileText size={16} color={colorMap[type] || '#6b7280'} />;
  };

  const getTaskStatusIcon = (completed: boolean, dueDate: string) => {
    if (completed) return <CheckCircle size={20} color="#059669" />;
    const due = new Date(dueDate);
    return due < new Date()
      ? <AlertCircle size={20} color="#dc2626" />
      : <Circle size={20} color="#6b7280" />;
  };

  const getPhaseLabel = (status: string) => {
    const labels: Record<string, string> = {
      planning: 'Planning Phase',
      pre_op: 'Pre-Operation',
      surgery: 'Surgery Day',
      post_op: 'Post-Operation',
      completed: 'Completed',
    };
    return labels[status] || 'Unknown Phase';
  };

  if (authLoading || dataLoading) {
    return <LoadingSpinner />;
  }

  // The full UI remains unchanged here.
  // You can paste your original JSX content from <ScrollView> onward unchanged.

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {/* ... Your UI elements here, unchanged ... */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // ... Your full styles block stays as-is ...
});
